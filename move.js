function move(element) {
    //this element ^ must be declared at some time in the function to be useable
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    //callback Direction
    function moveWithArrowKeys(left, bottom, cbDirection) {
        let direction = null;
        let x = left;
        let y = bottom;
        function moveCharacter() {
            if (direction === 'west') {
                x = x - 1;
            }
            if (direction === 'east') {
                x = x + 1;
            }
            if (direction === 'north') {
                y = y + 1;
            }
            if (direction === 'south') {
                y = y - 1;
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

       setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            cbDirection(direction)
        })

        document.addEventListener('keyup', function (e) {
            direction = null
            cbDirection(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
        //this is an object!^^
    }
}