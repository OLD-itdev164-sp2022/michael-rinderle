import { IconButton } from './IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeConsumer } from 'styled-components';

export const SearchButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Search} {...props} />}
    </ThemeConsumer>
)

SearchButton.propTypes = {
    variant: PropTypes.string
}