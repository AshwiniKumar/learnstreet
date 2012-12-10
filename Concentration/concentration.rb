#Memory Concentration Game
def populate() 
    # This method populates the concentration game board by
    # populating and returning a 5x4 two-dimensional array.
    # Initialize all the values to zero (0), then randomly populate
    # numbers from 1-10 in different cells of the array, making
    #sure each number is only used twice.
    #REPLACE THIS CODE WITH YOUR  populate METHOD
matrix = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

    for i in 0..9

        j=0

        while j < 2

            x = rand(5);

            y = rand(4);

            if matrix[y][x] == 0

                matrix[y][x] = (i + 1)

            else

                j=j-1

            end

            j=j+1

        end

    end

    return matrix;
end

def selectCard(x, y)
    # Select the card at position (x, y). Return a card object with
    # values for its x & y location coordinates (i.e., [row][column]).
	#REPLACE THIS CODE WITH YOUR  selectCard METHOD
     card = {}
    card["x"] = x
    card["y"] = y
    return card
end

def isMatch(selectedCard1, selectedCard2, matrix) 
    # Given two card objects (like those created with the selectCard()
    # method above) and a 5x4 game board matrix of 0-9 numbers
    # (like the one from the populate() method above), check if the
    # values of the two cards are the same. Use the [x][y] coordinates
    # from each card object (selectedCard1 and selectedCard2) to
    # reference the 'matrix' values at the coordinates for each.
    # Compare them for a possible match. If they match, return true.
    # Otherwise return false.
    # Also make sure that selectedCard1 and selectedCard2 are not the same card!
    #REPLACE THIS CODE WITH YOUR  isMatch METHOD
       if (selectedCard1['x'] != selectedCard2['x'] || selectedCard1['y'] != selectedCard2['y']) 

                if (matrix[selectedCard1['x']][selectedCard1['y']] == matrix[selectedCard2['x']][selectedCard2['y']])

            return true;

             end

                return false;

    end
end