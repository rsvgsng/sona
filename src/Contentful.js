import { createClient } from 'contentful'
const client = createClient({
    space: 'm72k1i03twoh',
    accessToken: '0g3ieYEpwRzy3p93nXcOxLLu06jgihM_spUOQ95uM2A'
  })
  
  const getAll = (contentType) => client.getEntries(
    {
      content_type:contentType
    }
  ).then(response => response.items)
  
  const getSingle = (slug,contentType) =>
    client
      .getEntries({
        'fields.slug': slug,
        content_type: contentType
      })
      .then(response => response.items)
  
  export { getAll, getSingle }
  