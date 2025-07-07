# Currency Converter

A simple and elegant currency converter web application that allows users to convert between different currencies using real-time exchange rates.

## Features

- 🌍 **Real-time Exchange Rates**: Uses the Frankfurter API to get current exchange rates
- 🎨 **Modern UI**: Clean and responsive design with smooth animations
- 🚀 **Fast & Lightweight**: No heavy frameworks, pure HTML, CSS, and JavaScript
- 🎯 **Easy to Use**: Simple interface with dropdown selections and flag indicators

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and responsive design
- **JavaScript (ES6+)**: Vanilla JavaScript with async/await for API calls
- **Font Awesome**: Icons for better user experience
- **Frankfurter API**: Free currency exchange rate API

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser, or
   - Use a local server: `python -m http.server 8000` then visit `http://localhost:8000`

3. **Convert currencies**:
   - Enter the amount you want to convert
   - Select the "From" currency (default: USD)
   - Select the "To" currency (default: INR)
   - Click "Get Exchange Rate" to see the conversion

## API Information

This project uses the [Frankfurter API](https://www.frankfurter.app/) which provides:
- Free and reliable exchange rates
- No API key required

## Project Structure

```
currency-converter/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── app.js              # Main JavaScript logic
├── code.js             # Currency codes and country mappings
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## Features in Detail

### Currency Selection
- Dropdown menus with all most world currencies
- Currency with their respective flags
- Default selection: USD to INR

### Real-time Conversion
- Automatic rate updates when currencies are changed
- Error handling with fallback rates
- Formatted output with 2 decimal places

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Clean, modern interface
- Smooth transitions and hover effects

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Frankfurter API](https://www.frankfurter.app/) for providing free exchange rate data
- [Font Awesome](https://fontawesome.com/) for the icons
- [Flag

---

