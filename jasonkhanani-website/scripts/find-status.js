const client = require('part:@sanity/base/client')

const query = `*[defined(status)]{_id, _type, status, _updatedAt, _createdAt}`

async function run() {
  try {
    const res = await client.fetch(query)
    console.log(JSON.stringify(res, null, 2))
  } catch (err) {
    console.error('Query failed:', err)
    process.exit(1)
  }
}

run()
