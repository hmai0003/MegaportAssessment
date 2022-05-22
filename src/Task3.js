async function fetchData(endpoint) {
    const response = await fetch(endpoint)
     if (!response.ok) {
       throw new Error (`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

async function getRequestedData () {
    try {
    	let result = await fetchData('https://api.megaport.com/v2/locatons');
      return result.data.map((value) => { return value.address });
		} catch (e) {
    	return e.message;
    }
}

(async () => {
	console.log(await getRequestedData());
})()
