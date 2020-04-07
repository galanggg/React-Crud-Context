import React, { Fragment } from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList';

const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">CRUD with React Context API and Hooks</h3>
                    <Header />
                    <EmployeeList />
                </div>
            </div>
        </Fragment>
    )
}

export default Home