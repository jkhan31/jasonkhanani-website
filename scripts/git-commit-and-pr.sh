#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/git-commit-and-pr.sh "Import Title"
TITLE="$1"
if [ -z "${TITLE:-}" ]; then
  echo "Usage: $0 \"Import Title\""
  exit 1
fi

slug=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-|-$//g')
BRANCH="import/$(date +%Y%m%d%H%M%S)-$slug"

echo "Creating branch $BRANCH"
git fetch origin
git checkout -b "$BRANCH"

# Add changed content (posts + assets). If nothing to add, abort gracefully.
git add content/posts || true
git add content/posts/assets || true

if git diff --cached --quiet; then
  echo "No changes to commit. Exiting.";
  exit 0
fi

git commit -m "Import: $TITLE"
git push -u origin "$BRANCH"

# Create PR using gh if available, otherwise use GitHub API with GITHUB_TOKEN
if command -v gh >/dev/null 2>&1; then
  echo "Creating PR with gh"
  gh pr create --title "Import: $TITLE" --body "Imported via automation" --base main --head "$BRANCH"
else
  if [ -z "${GITHUB_TOKEN:-}" ]; then
    echo "gh CLI not found and GITHUB_TOKEN not set. PR not created.";
  else
    echo "Creating PR via GitHub API"
    REPO_URL=$(git config --get remote.origin.url)
    # normalize to owner/repo
    REPO_PATH=$(echo "$REPO_URL" | sed -E 's#^(git@|https?://)([^/:]+)[:/]##' | sed -E 's/\.git$//')
    API_URL="https://api.github.com/repos/$REPO_PATH/pulls"
    json=$(printf '{"title":"%s","head":"%s","base":"main","body":"%s"}' "Import: $TITLE" "$BRANCH" "Imported via automation")
    curl -s -H "Authorization: token $GITHUB_TOKEN" -H "Content-Type: application/json" -d "$json" "$API_URL" >/dev/null
  fi
fi

# Trigger Netlify build hook if provided
if [ -n "${NETLIFY_BUILD_HOOK_URL:-}" ]; then
  echo "Triggering Netlify build hook"
  curl -s -X POST "$NETLIFY_BUILD_HOOK_URL" >/dev/null || true
fi

echo "Done. Branch: $BRANCH"
