import random

def start_game():
    balance = 100
    print("--- Welcome to the High-Low Dice Game! ---")
    print(f"You start with ${balance}.")

    while balance > 0:
        current_roll = random.randint(1, 6)
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
        next_roll = random.randint(1, 6)
        print(f"The next roll is: {next_roll}")

        # Logic to determine win/loss
        if (guess == 'H' and next_roll > current_roll) or \
           (guess == 'L' and next_roll < current_roll) or \
           (guess == 'S' and next_roll == current_roll):
            
            # Payouts: Higher/Lower doubles money, 'Same' triples it because it's rarer!
            reward = bet * 2 if guess != 'S' else bet * 3
            balance += (reward - bet)
            print(f"Correct! You won ${reward - bet}. New balance: ${balance}")
        else:
            balance -= bet
            print(f"Wrong guess! You lost ${bet}. New balance: ${balance}")

        if balance <= 0:
            print("\nGame Over! You're broke.")
            break
        
        if input("\nPlay another round? (y/n): ").lower() != 'y':
            break

    print(f"Thanks for playing! You walked away with ${balance}.")

if __name__ == "__main__":
    start_game()
