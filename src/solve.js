const moves = [];
const solve = (n, src, dest, aux) => {
    if (n === 0) {
        return;   // If the number is 0 (there are no disks) just return 0 (null) and do nothing.
    }
    solve(n-1, src, aux, dest); // Move the disk from the source rod (A) to the auxiliary rod (B).
    document.getElementById('moves').innerHTML += `<p>Move disc ${n} from ${src} to ${dest}</p>`;
    solve(n-1, aux, dest, src) // Move the disk from the auxiliary rod (B) to the destination rod (C).
}   
/*
The first argument means the number of disks.
The second argument is the starting point.
The third argument is the destination.
The fourth  argument is the auxiliary rod.
*/
// console.log(solve(2, 'A', 'C', 'B'));
export { solve, moves };
