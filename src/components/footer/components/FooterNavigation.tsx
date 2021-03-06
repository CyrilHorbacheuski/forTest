import React, {useContext} from "react";
import { Navigation, NavigationItem } from "../styles/FooterStyles.ts";
import { Link } from "react-router-dom";
import {ThemeContext} from './../../../context.ts'

const FooterNavigation = () => {

    const {themeState} = useContext(ThemeContext)

    return <>
        <Navigation theme={themeState} className="navigation" id="navigation">
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/">Home</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/about">About</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/contact">Contact Us</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/blog">Blog</Link>
            </NavigationItem>
        </Navigation>
    </>
}

export default FooterNavigation