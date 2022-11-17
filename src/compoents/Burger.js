import React, { Component } from 'react';
import './Burger.css';
import './AddNav.css';
import logo from "../Images/BurgerLogoImg.png";

export default class Burger extends Component {
    state = {
        salad: 0,
        bacon: 0,
        cheese: 0,
        Meat: 0
    }

   
   
    lessMoreIngredient = (action, ingredient) => {
        let {
            salad,
            bacon,
            cheese,
            meat
        } = this.state;

        let stateValue;
        switch (ingredient) {
            case 'salad': {
                stateValue = salad;
                break;
            }
            case 'bacon': {
                stateValue = bacon;
                break;
            }
            case 'cheese': {
                stateValue = cheese;
                break;
            }
            case 'meat': {
                stateValue = meat;
                break;
            }
            default: break;
        }
        if (action === 'More') {
            stateValue = stateValue + 1;
        } else {
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            salad,
            bacon,
            cheese,
            meat
        } = this.state;
        let burger = [];

        // outputting the Salad
        for (let i = 0; i < salad; i++) {
            burger.push(<div key={burger.length} className="saladSide"></div>);
        }
        // outputting the Bacon
        for (let i = 0; i < bacon; i++) {
            burger.push(<div key={burger.length} className="baconSide"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++) {
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < meat; i++) {
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if (burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }
    


    OrderAlert = () => {



        var pricelist={
            "salad":10,
            "cheese":15,
            "bacon":20,
            "meat":50
        };

        var total_cost=parseFloat((pricelist['salad']*this.state.salad)) + parseFloat((pricelist['bacon']*this.state.bacon)) +parseFloat((pricelist['cheese']*this.state.cheese))+parseFloat((pricelist['meat']*this.state.meat));
 
            var data="Your Order \n\n";
                data=data+"A delicius burger with following ingredients: \n\n";
                data=data+"Salad : "+this.state.salad+"\n";
                data=data+"Bacon : "+this.state.bacon+"\n";
                data=data+"Cheese : "+this.state.cheese+"\n";
                data=data+"Meat : "+this.state.meat+"\n";
                data=data+"Your Total Cost : "+total_cost+"\n\n";
                data=data+"Continue to Checkout ? \n "
                data=data+"CANCEL CONTINUE \n "
            
                alert(data);                
                
            }

    render() {
        return (
            <>
                <div className='navbar'>
                    <div className='container'>
                        <img src={logo} alt="logo" height='40px' className='logo'/>
                        <a href="#"> CheckOut</a>
                        <a className='active' href="#"> Burger Builder</a>
                    </div>
                </div>

                <hr />

                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>

                <div className="ingredientsBlock">
                    {/* <p>Salad</p> */}

                    <div className="ingrBtns">
                        <label> Salad: </label>
                        <button className="ingrBtnLess" onClick={() => this.lessMoreIngredient('less', 'salad')}>Less</button>
                        <button className="ingrBtn" onClick={() => this.lessMoreIngredient('More', 'salad')}>More</button>
                    </div>

                    <div className="ingrBtns">
                        <label>Bacon: </label>
                        <button className="ingrBtnLess" onClick={() => this.lessMoreIngredient('less', 'bacon')}>Less</button>
                        <button className="ingrBtn" onClick={() => this.lessMoreIngredient('More', 'bacon')}>More</button>
                    </div>

                    <div className="ingrBtns">
                        <label>Cheese:</label>
                        <button className="ingrBtnLess" onClick={() => this.lessMoreIngredient('less', 'cheese')}>Less</button>
                        <button className="ingrBtn" onClick={() => this.lessMoreIngredient('More', 'cheese')}>More</button>
                    </div>
                    <div className="ingrBtns">
                        <label>Meat: </label>
                        <button className="ingrBtnLess" onClick={() => this.lessMoreIngredient('less', 'meat')}>Less</button>
                        <button className="ingrBtn" onClick={() => this.lessMoreIngredient('More', 'meat')}>More</button>
                    </div>
                    <div className='BtnOrders'>
                        <button className='BtnOrder' onClick={()=>this.OrderAlert()}>ORDER NOW </button>
                    </div>
                </div>
            </>
        );
    }
}