1.  List the symbols for each of the Javascript operator
    1.  Arithmetic Operators:
        +	Adds two numeric operands.
        -	Subtract right operand from left operand
        *	Multiply two numeric operands.
        /	Divide left operand by right operand.
        %	Modulus operator. Returns remainder of two operands.
        ++	Increment operator. Increase operand value by one.
        --	Decrement operator. Decrease value by one.
    2.  Assignment Operators:
        =	Assigns right operand value to the left operand.
        +=	Sums up left and right operand values and assigns the result to the left operand.
        -=  Subtract right operand value from the left operand value and assigns the result to the left operand.
        *=	Multiply left and right operand values and assigns the result to the left operand.
        /=	Divide left operand value by right operand value and assign the result to the left operand.
        %=	Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
    3.  Comparision Operators:
        ==	Compares the equality of two operands without considering type.
        ===	Compares equality of two operands with type.
        !=	Compares inequality of two operands.
        >	Returns a boolean value true if the left-side value is greater than the right-side value; otherwise, returns false.
        <	Returns a boolean value true if the left-side value is less than the right-side value; otherwise, returns false.
        >=	Returns a boolean value true if the left-side value is greater than or equal to the right-side value; otherwise, returns false.
        <=	Returns a boolean value true if the left-side value is less than or equal to the right-side value; otherwise, returns false.
    4.  Logical Operators:
        &&	&& is known as AND operator. It checks whether two operands are non-zero or not (0, false, undefined, null or "" are considered as zero). It returns 1 if they are non-zero; otherwise, returns 0.
        ||	|| is known as OR operator. It checks whether any one of the two operands is non-zero or not (0, false, undefined, null or "" is considered as zero). It returns 1 if any one of of them is non-zero; otherwise, returns 0.
        !	! is known as NOT operator. It reverses the boolean result of the operand (or condition). !false returns true, and !true returns false.
    5.  Bitwise Operators:
2.  Examples ofJavascript Operator
    1.  Arithmetic Operators:
        let x = 5, y = 10;
        let z = x + y; //performs addition and returns 15
        z = y - x; //performs subtraction and returns 5
        z = x * y; //performs multiplication and returns 50
        z = y / x; //performs division and returns 2
        z = x % 2; //returns division remainder 1
    2.  Assignment Operators:
        let x = 5, y = 10, z = 15;
        x = y; //x would be 10
        x += 1; //x would be 6
        x -= 1; //x would be 4
        x *= 5; //x would be 25
        x /= 5; //x would be 1
        x %= 2; //x would be 1

    3.  Comparision Operators:
    4.   Logical Operators:
    let a = 5, b = 10;
        (a != b) && (a < b); // returns true
        (a > b) || (a == b); // returns false
        (a < b) || (a == b); // returns true
        !(a < b); // returns false
        !(a > b); // returns true 

    5.   Bitwise Operators:

4.  1
    8
    15
