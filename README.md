# Buffer Game 

To play the game select a card and the contents will be allocated to the buffer. The location that the allocation occurrs is random.
Upon allocation each box in the buffer will change to the color of the selected card along with how many turns are remaining before the
resources are freed. If the player goes five turns without failure a skip button will appear letting them skip a turn. The button will only
re-appear five turns after the press.

# Allocation types

There are two types of allocation in the game contiguous and non-contiguous. With contiguous allocation a suitable location is chosen at random from
the buffer then all new allocations occurr adjecently. With non-contiguous, n many boxes are chosen at random and allocated to.

# How user data is stored

The game runs on a static site and utilizes cookies to store information such as usernames and high scores. The username cookie persists for one day whereas
the scoreboard persists for 30 days. (note, use within these time spans will reset the timers and prevent the cookies from expiring);
