export const ModalFieldListAddData = {
    title: 'Add Movie',
    fields: [
        {
            label: 'Title',
            kind: 'input',
            type: 'text',
            placeholder: 'Title here',
            value: ''
        },
        {
            label: 'Release Date',
            kind: 'input',
            type: 'date',
            placeholder: 'Select Date',
            value: '',
        },
        {
            label: 'Movie URL',
            kind: 'input',
            type: 'text',
            placeholder: 'Movie URL here',
            value: '',
        },
        {
            label: 'Genre',
            kind: 'select',
            type: 'multiple',
            placeholder: 'Select Genre',
            value: '',
        },
        {
            label: 'Overview',
            kind: 'input',
            type: 'text',
            placeholder: 'Overview here',
            value: '',
        },
        {
            label: 'Runtime',
            kind: 'input',
            type: 'text',
            placeholder: 'Runtime here',
            value: '',
        },
    ],
    buttons: [
        {
            kind: 'alt',
            text: 'Reset'
        },
        {
            kind: 'main',
            text: 'Submit'
        }
    ]
}
