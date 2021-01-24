function kicker() {
    return 'Kick'
}
function kickTheBall(kick, theBall) {
    console.log(kick() + " " + theBall)
}
kickTheBall(kicker, 'the ball')