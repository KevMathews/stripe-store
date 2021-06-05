export const isInCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id);
}

const API = 'https://mystoreserver.herokuapp.com'
// const API = 'https://mystore.kevmathews.com'
// const API ='http://localhost:8080'

export async function fetchFromApi(endpoint, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}