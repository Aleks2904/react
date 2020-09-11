import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.scss';

function HeaderComponent(){
    return (
        <header>
            <h1 className={styles.rd}>
                hello react
            </h1>
        </header>
    )
}

export const Header = hot(HeaderComponent);
