import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: '1k6ol76a',
    dataset:'production',
    apiVersion:'2021-08-31',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})  

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)