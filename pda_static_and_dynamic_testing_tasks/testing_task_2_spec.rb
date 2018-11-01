require('minitest/autorun')
require('minitest/rg')
require('pry')
require_relative('testing_task_2.rb')
require_relative('card.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("Clubs", "Ace")
    @card2 = Card.new("Diamonds", "3")
    @card3 = Card.new("Spades", "7")

    @card_game = CardGame.new()
  end

  def test_value()
    assert_equal(3, @card_game.card_to_value(@card2))
  end

  def test_check_for_ace()
    assert_equal(true, @card_game.check_for_ace(@card1))
  end

  def test_highest_card()
    result = @card_game.highest_card(@card2, @card3)
    assert_equal("7", result)
  end

  def test_cards_total()
    cards = [@card1, @card2, @card3]
    expected = @card_game.cards_total(cards)
    assert_equal("You have a total of 11", expected)
  end

end
