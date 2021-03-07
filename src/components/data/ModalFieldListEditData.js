export const ModalFieldListEditData = {
    title: 'Edit Movie',
    fields: [
        {
            label: 'Movie ID',
            kind: 'text',
            text: 'MO32820TH',
        },
        {
            label: 'Title',
            kind: 'input',
            type: 'text',
            placeholder: 'Title here',
            value: 'Moana'
        },
        {
            label: 'Release Date',
            kind: 'input',
            type: 'date',
            placeholder: 'Select Date',
            value: '31/03/2018',
        },
        {
            label: 'Movie URL',
            kind: 'input',
            type: 'text',
            placeholder: 'Movie URL here',
            value: 'www.moana.com',
        },
        {
            label: 'Genre',
            kind: 'select',
            type: 'multiple',
            placeholder: 'Select Genre',
            value: 'comedy',
        },
        {
            label: 'Overview',
            kind: 'input',
            type: 'text',
            placeholder: 'Overview here',
            value: 'Overview text goes here',
        },
        {
            label: 'Runtime',
            kind: 'input',
            type: 'text',
            placeholder: 'Runtime here',
            value: 'Runtime text goes here',
        },
    ],
    buttons: [
        {
            kind: 'alt',
            text: 'Reset'
        },
        {
            kind: 'main',
            text: 'Save'
        }
    ]
}

