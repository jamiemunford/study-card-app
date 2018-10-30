export async function getJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } 
  catch(ex) {
    console.log("Failed to get JSON: ", ex);
  } 
}

export async function deleteJSON(url) {
  try {
    await fetch(url, {method: 'DELETE'});
  } catch(ex) {
    console.log("Failed to delete JSON", ex);
  }
}

export async function addJSON(url, data) {
  try {
    await fetch(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
  } catch(ex) {
    console.log("Failed to delete JSON", ex);
  }
}


