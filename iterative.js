function gjeneroSekuencen(n, k) {
    let queue = [];
    for (let i = 1; i <= k; i++) {
        queue.push([i]);
    }

    while (queue.length > 0) {
        let currentSequence = queue.shift();

        if (currentSequence.length === n) {
            console.log(currentSequence.join(" "));
        } else {
            let lastNum = currentSequence[currentSequence.length - 1];
            for (let i = lastNum + 1; i <= k; i++) {
                let newSequence = [...currentSequence, i];
                queue.push(newSequence);
            }
        }
    }
}

const n = 3;
const k = 5;
gjeneroSekuencen(n, k);