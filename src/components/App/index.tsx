import React from 'react';
import * as classes from './App.module.scss'
import {Outlet} from "react-router-dom";

import testImage from "@/assets/test.png"
import SvgTest from "@/assets/svg-test.svg"

const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <>
            <div>
                <img
                    src={testImage as string}
                    alt="img"
                    width="240"
                />
            </div>
            <div>
                <SvgTest
                    width="240"
                    height="240"
                />
            </div>
            <h1>{count}</h1>
            <button className={classes.button} onClick={increment}>+ inc</button>
            <Outlet/>
        </>
    )
}

export default App;