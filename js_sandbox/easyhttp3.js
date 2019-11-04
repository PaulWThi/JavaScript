/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Paul Thi
 * @license MBz
 * 
 */

class EasyHTTP {
  // Make an HTTP GET Request 
  async get(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url)
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(error => reject(error))
    // });
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }
  // Make an HTTP POST Request 
  async post(url, data) {
    const reponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const responseData = await reponse.json();
    return responseData;
  }
  // Make an HTTP PUT Request 
  async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json();
      return responseData;
  }
  // Make an HTTP DELETE Request 
  async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await 'Resource deleted'
      return responseData;
  }
 }
