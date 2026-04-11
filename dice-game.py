import random

def start_game():
    print("--- Welcome to the High-Low Dice Game! ---")
    
    # Outer loop allows restarting the game completely after losing
    while True: 
        balance = 100
        current_roll = random.randint(1, 6) # Initial roll for the new game
        print(f"\n--- New Game Started! Starting Balance: ${balance} ---")
        
        # Inner loop handles the ongoing rounds as long as you have money
        while balance > 0:
            print(f"\nYour current roll is: {current_roll}")
            
            # Get the bet
            try:
                bet = int(input(f"How much would you like to bet? (Balance: ${balance}): "))
                if bet > balance or bet <= 0:
                    print("Invalid bet amount. Try again.")
                    continue
            except ValueError:
                print("Please enter a valid number.")
                continue

            # Get the prediction
            guess = input("Will the next roll be (H)igher, (L)ower, or the (S)ame? ").upper()
            if guess not in ['H', 'L', 'S']:
                print("Invalid guess. Please enter H, L, or S.")
                continue
                
            next_roll = random.randint(1, 6)
            print(f"The next roll is: {next_roll}")

            # Logic to determine win/loss
            if (guess == 'H' and next_roll > current_roll) or \
               (guess == 'L' and next_roll < current_roll) or \
               (guess == 'S' and next_roll == current_roll):
                
                # Payouts: Higher/Lower doubles money, 'Same' triples it
                reward = bet * 2 if guess != 'S' else bet * 3
                balance += (reward - bet)
                print(f"Correct! You won ${reward - bet}. New balance: ${balance}")
            else:
                balance -= bet
                print(f"Wrong guess! You lost ${bet}. New balance: ${balance}")

            # TWEAK 1: Set the next round's starting roll to be this round's result
            current_roll = next_roll

            # TWEAK 2: Handle going broke
            if balance <= 0:
                print("\nGame Over! You're broke.")
                break # Breaks the inner loop to trigger the play again prompt
            
            if input("\nPlay another round? (y/n): ").lower() != 'y':
                print(f"\nThanks for playing! You walked away with ${balance}.")
                return # Exits the entire game if the player decides to cash out

        # TWEAK 2: Prompt to restart from scratch after going broke
        if input("\nWould you like to start a new game? (y/n): ").lower() != 'y':
            print("\nThanks for playing! See you next time.")
            break

if __name__ == "__main__":
    start_game()
