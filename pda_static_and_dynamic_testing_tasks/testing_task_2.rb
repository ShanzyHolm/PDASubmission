### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
require('pry')
class CardGame

  def initialize()

  end

  def card_to_value(card)
    case card.values
    when "Ace"
      return 1
    when "2"
      return 2
    when "3"
      return 3
    when "4"
      return 4
    when "5"
      return 5
    when "6"
      return 6
    when "7"
      return 7
    when "8"
      return 8
    when "9"
      return 9
    when "10"
      return 10
    when "Jack"
      return 11
    when "Queen"
      return 12
    when "King"
      return 13
    end
  end

  def check_for_ace(card)
    if card_to_value(card) == 1
      return true
    else
      return false
    end
  end


  def highest_card(card1, card2)
    if card_to_value(card1) > card_to_value(card2)
      return card1.values()
    else
      return card2.values()
    end
  end


  def cards_total(cards)
    total = 0
    for card in cards
      total += card_to_value(card)
    end
    return "You have a total of #{total}"
  end

end
