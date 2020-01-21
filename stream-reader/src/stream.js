const handler = async (event) => {
    console.log(JSON.stringify(event))

    let records = event['Records'];
    records.forEach(r => {
        let data = r['kinesis']['data'];
        let buff = new Buffer(data, 'base64');
        console.log(buff.toString('utf8'))
    });
};

module.exports = {
    handler
};