
let candidate_num = parseInt(prompt("Enter the number of candidates: "))
let cart = []
let candidate = {}
for (let i = 0; i < candidate_num; i++) {
    let candidate_name = prompt(`Enter the name of candidate #${i + 1}`)
    candidate = {'name': candidate_name, 'votes': 0}
    cart.push(candidate)
}

function addVote(cart, check_param) {
    for (let i of cart) {
        if (i['name'] === check_param) {
            i['votes'] += 1
            return true;
        }
    }
    return false;
}

function printMaxVotes(cart) {
    let simplified_dict = {}
    for (let i of cart) {
        simplified_dict[i['name']] = i['votes']
    }

    let maxValue = 0
    let maxKey = ""

    for (let i in simplified_dict) {
        if (simplified_dict[i] > maxValue) {
            maxValue = simplified_dict[i]
            maxKey = i
        }
    }



    console.log(`The winner is ${maxKey} with ${maxValue} votes. `)
    for (let i in simplified_dict) {
        console.log(`${i}: ${simplified_dict[i]}`)
    }
}



let voters = parseInt(prompt("Enter the number of voters: "))
let voter_increment = 0

for (let i = 0; i < voters; i++) {
    voter_increment += 1
    let voter = prompt(`Voter ${voter_increment}, please enter your vote: `)
    let found_checker = addVote(cart, voter)
    while (!found_checker) {
        voter = prompt("Candidate not found, please enter again:  ")
        found_checker = addVote(cart, voter)
        if (found_checker) {
            break;
        }
    }
}

printMaxVotes(cart)