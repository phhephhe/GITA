Overview:

Angular app V(18) uses Angular Material for UI components and Tailwind CSS styling.
For each task, there are standalone components that are lazily loaded on the corresponding URL.

1. Work Experience Form.

-Users can dynamically add and remove jobs and positions.
Each input is Reusable and uses Control Value Accessor_ to become part of the form.
A Custom Validator is applied to the website input, which checks whether its value
starts with 'www.' and ends with '.com' or '.ge'

2.IMDB API Integration.

-We can retrieve movies from the IMDB API with search functionality.
An interceptor is used that adds a token to the request.
*Note: *Due to many requests, the token may be expired and need to be replaced

3. Date format HH:mm:ss MMM dd yyyy.

-A Custom Pipe has been created that checks the received input for a date
and then transforms it according to the given format, which is used

Moment.js: library.

4. Calendar.

-The component displays the current calendar month, shows the current day
and makes predefined holidays visible.

5. Word comparison

-The given string is compared with all the strings in the array and as a result,
it returns how many percent it matches them. For this, the ComapareTwoString
NPM package is used, and for its percentage output and visibility,
Angular Material Progress bar.