function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John' });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 101, product: 'Widget' }, { id: 102, product: 'Gadget' }]);
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_id: order.id, details: 'Some details' });
        }, 1000);
    });
}

getUser()
  .then(getOrders)
  .then((orders) => getOrderDetails(orders[0]))
  .then((orderDetails) => {
    console.log('User:', orderDetails.user);
    console.log('Orders:', orderDetails.orders);
    console.log('Order Details:', orderDetails.details);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
