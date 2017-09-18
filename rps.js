// <!--Suggestion by: mi - cul@boya-kasha.co.uk-- >
// <!--Based on code by: Maximilian Stocker (maxstocker@reallyusefulcomputing.com)-->

// <!--Original:  Ronnie T.Moore-- >
// <!--Web Site: The JavaScript Source -- >

// <!--This script and many more are available free online at -- >
// <!--The JavaScript Source!! http://javascript.internet.com -->

// <!--Modified by: Eric M.Berger-- >

function playGame(choice) {
    with (document.game) {
        comp = Math.round((Math.random() * 2) + 1);
        var choicename;
        if (comp == 1) choicename = "rock";
        if (comp == 2) choicename = "paper";
        if (comp == 3) choicename = "scissors";
        msg.value = 'I throw ' + choicename + ', ';

        switch (choice) { // calculates score
            case 1: // rock
                if (comp == 1) {
                    draw.value++;
                    msg.value += 'It is a draw.';
                    break;
                }
                if (comp == 2) {
                    loss.value++;
                    msg.value += 'Paper covers Rock! You lose!';
                    break;
                }
                if (comp == 3) {
                    win.value++;
                    msg.value += 'Rock crushes Scissors! You win!';
                    break;
                }
            case 2: // paper
                if (comp == 1) {
                    win.value++;
                    msg.value += 'Paper covers Rock! You win!';
                    break;
                }
                if (comp == 2) {
                    draw.value++;
                    msg.value += 'It is a draw.';
                    break;
                }
                if (comp == 3) {
                    loss.value++;
                    msg.value += 'Scissors cuts Paper! You lose!';
                    break;
                }
            case 3: // scissors
                if (comp == 1) {
                    loss.value++;
                    msg.value += 'Rock crushes Scissors! You lose!';
                    break;
                }
                if (comp == 2) {
                    win.value++; msg.value += 'Scissors cuts Paper! You win!'; break;
                }
                if (comp == 3) {
                    draw.value++; msg.value += 'It is a draw.';
                    break;
                }
        }
        msg.value += '  Go again!';
    }
}

