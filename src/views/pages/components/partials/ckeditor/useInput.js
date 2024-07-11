import { defineProps, onMounted, ref, toRefs, getCurrentInstance } from 'vue'

export default function useInput({ props }) {

  const editorConfig = {
    // language: 'de',
    
    // width: 500,     // 500 pixels wide.
    // width: '75%',   // CSS unit (percent).

    // height: 500,        // 500 pixels high.
    // height: '250px',     // CSS unit (em).

    // removePlugins: [ 'Heading', 'InsertMedia' ],
    toolbar: [
      'undo',
      'redo',
      // 'alignment',  // Displaying the proper UI element in the toolbar.,
      'Heading',
      'bold',
      'italic',
      '|',
      'bulletedList',
      'numberedList',
      // '|',
      'insertTable',
      '|',
      'blockQuote',
      'link',
    ],
    alignment: {
      options: ['left', 'center', 'right'],
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
      ],
    },
    heading: {
      options: [
        {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
        {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
        {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
        {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
        {model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'}
      ]
    },
    style: {
      definitions: [
        {
            name: 'Article category',
            element: 'h3',
            classes: [ 'category' ]
        },
        {
          name: 'Info box',
          element: 'a',
          classes: [
            'link-primary',
          ],
        },
        {
            name: 'Info box',
            element: 'p',
            classes: [ 'info-box' ]
        },
      ],
    },
    // style: {
    //   definitions: [
    //       {
    //           name: 'Article category',
    //           element: 'h3',
    //           classes: [ 'category' ]
    //       },
    //       {
    //           name: 'Info box',
    //           element: 'p',
    //           classes: [ 'info-box' ]
    //       },
    //   ]
    // },
    format_p: { element : 'p', attributes : { 'class' : 'yourClassName' } },
    htmlSupport: {
      allow: [
        // Enables plain <div> elements.
        {
          name: 'a',
          classes: [ 'link-success' ],
        },
      ],
    },
  }

  const {
    form,
    locale,
    name,
  } = props;

  return {
    form,
    locale,
    name,

    editorConfig,
  }
}
