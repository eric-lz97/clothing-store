import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import PropTypes from 'prop-types'

import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInandSignUpPage'
import CheckoutPage from './pages/checkout/CheckoutPage'

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import { selectCartItemsCount } from './redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

class App extends React.Component {
  // firebase onAuthStateChanged is an observable so hold observable value here
  // and unsubscribe when component unmounts
  unsubscribeFromAuth = null

  componentDidMount () {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null
  }

  render () {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' render={() =>
            this.props.currentUser
              ? (<Redirect to='/' />)
              : (<SignInAndSignUp />)
          } />
          <Route exact path='/checkout' render={() =>
            this.props.cartItemsCount
              ? (<CheckoutPage />)
              : (<Redirect to='/' />)
          } />
        </Switch>
      </>
    )
  }
}

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  cartItemsCount: PropTypes.number.isRequired
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
