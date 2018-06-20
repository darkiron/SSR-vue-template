import marked from 'marked'

export default {
  methods: {
    raw (value) {
      if (!value) {
        return ''
      }

      return marked(value.replace(/\r\n/g, '<br/>'))
    }
  },
  created () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      tables: true,
      breaks: true,
      pedantic: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
  }
}

