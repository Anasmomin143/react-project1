import React from "react";
function FetchUserDataFromBE() {
    return {
        name: 'Abdul Raheman',
        age: 22,
        income: 40000,
    }
}
export default class UserInfoDisplayByClass2 extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            tax: 0,
            isLoading: false,
            isTaxCalulating: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        setTimeout(() => {
            const FetchedData = FetchUserDataFromBE();
            this.setState({ user: FetchedData, isLoading: false });
        }, 3000)
    }
    shouldComponentUpdate(_, nextState) {
        console.log(nextState)
        if (nextState.isTaxCalulating) {
            if (nextState.user.income > 25) {
                return true;
            }
            else {
                return false;
            }
        }
        return true
    }


    render() {
        const isLoading = this.state.isLoading;
        return (
            <>
                {isLoading ? <p>loading data from backend</p> :
                    <>
                        <p>Name of User is  : {this.state.user.name}</p>
                        <p>Age of User is   : {this.state.user.age}</p>
                        <p>income of user is: {this.state.user.income}</p>
                        <p>tax to be paid: {this.state.tax}</p>
                        <button onClick={() => {
                            const income = this.state.user.income;
                            this.setState({ tax: income * 0.3, isTaxCalulating: true })
                        }}>Calculate tax to be paid</button>
                    </>
                }
            </>
        )
    }

}