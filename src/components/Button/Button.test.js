import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button component test:', () => {
    it('Testing "+ Add Movie" Button component', () => {
        const actual = renderer
            .create(<Button kind="aux" className="buttonAddMovie">+ Add Movie</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Testing "Search" Button component', () => {
        const actual = renderer
            .create(<Button type="submit" className="formButton">Search</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Testing "Reset" Button component', () => {
        const actual = renderer
            .create(<Button kind='alt' className="modalFooterButton">Reset</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Testing "Submit" Button component', () => {
        const actual = renderer
            .create(<Button type="submit" kind='main' className="modalFooterButton">Submit</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Testing "Go Back To Home" Button component', () => {
        const actual = renderer
            .create(<Button kind='alt' className="pageNotFoundButton">Go Back To Home</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });
});
