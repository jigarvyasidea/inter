import os

def makeCommits(days: int):
    if days < 1:
        os.system('git push origin main')
        return 0  # Return a default value when days < 1
    else:
        dates = f"{days} days ago"
        with open('data.txt', 'a') as file:
            file.write(f'{dates} <- this was the commit for the day!!\n')
        
        # Staging 
        os.system('git add data.txt')

        # Commit 
        os.system('git commit --date="' + dates + '" -m "First commit for the day!"')

        return days + makeCommits(days - 1)  # Use '+' instead of '*' to accumulate the total days

totalCommits = makeCommits(30)
print(f"Total commits made: {totalCommits}")
