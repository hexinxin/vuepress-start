import { defineClientConfig, usePagesData } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        const pageData = usePagesData()
        Promise.all(Object.keys(pageData.value).map(key => pageData.value[key]())).then( pages => {
            console.log(pages)
            app.provide('pages',pages)
        })
    },
    setup() {
        console.log('root commont setup invoked')
    },
    rootComponents: [],
})
