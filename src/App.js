import React, { Component } from "react";
// import styles from "./app.module.css";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    {/* <p>Test</p> */}
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
