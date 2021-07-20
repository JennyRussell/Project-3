app.post('/api/messages', (req,res) => {
res.header('Content-Type', 'application/json');
client.messages
.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.to,
    body: req.body.body
})
.then(() => {
    res.send(JSON.stringify({success: true}));
})
.catch(err => {
    console.log(err);
    res.send(JSON.stringify({success: false}));
});
});



