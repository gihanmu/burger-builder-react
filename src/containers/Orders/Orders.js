import React, { Component } from 'react';
import {connect} from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import * as  actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
       this.props.onFetchOrders();
    }

    render () {
        let result = <Spinner />;
        if(!this.props.loading && this.props.orders.length){
            result = (
                <div>
                {this.props.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
            );
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        orders : state.order.orders,
        loading : state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));