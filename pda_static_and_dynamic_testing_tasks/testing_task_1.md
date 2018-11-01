### Testing task 1:

#### Carry out static testing on the code below by commenting on any errors that you see:
```ruby

require_relative('card.rb')
class CardGame

  # need to initialise in game as will need @card_game to create a new instance of a game to call methods for testing

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  # function name is not in lower snake case.
  # nothing initialised
  # .value is nothing; .values is a card parameter but does not return the numerical value of the card passed in so will need to create a method to return 1 as Ace otherwise will not be linked to the value of 1 (also will want to reuse the values of cards for other code, and possibly other situations so creating a method will be beneficial)
  # not assigning the value of 1 to value, we are checking that the value is equal to 1 so needs double ==

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

# extra unnecessary end (at very bottom of method)
# dif is not how we define a method - needs to be def
# arguments passed in need to be separated by a comma
# we will need to evaluate the numerical value of the cards so the if statement needs to refer to an unwritten method (create a method or refer to one that is already written for "check_for_ace" method)
# .value is not a method, .values is but so needs brackets after it
# .name is not a method, it is the .value that we want to return (as that is how the rank / name of the card is stored)
# the if statement should return card1
# the else statement is missing the word return, for returning card2

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
# This is not a class method it is an instance method (as the value of the cards the person has will change depending on the hand, and the game may even change how many cards a hand is - Go Fish is 5 cards, War is 26, Gin Rummy it is 10 cards, etc) and therefore does not need the self in the name
# (also depending on the game the card value/worth change - sometimes face cards = 10, other times a Jack may be 11, a Queen may be 12, etc.)
# total is not set to start at anything (so does not know what we want to do with this word in the method); nor that we want to use it as the starting point to add on the value/worth cards in the hand
# .value isn't linked to anything; .values is but will not work as to give numerical data to add together so will have to use an unwritten method (create new or use the same method that was used in check_for_ace and highest_card)
# return needs to be moved outside the for loop
# will need to interpolate the total into the string to return

```
