document.addEventListener('DOMContentLoaded', function () {
    const symptomForm = document.getElementById('sym-form');
    const suggestionsList = document.getElementById('suggestions');

    symptomForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulated suggestions (replace this with actual data)
        const symptomsInput = document.getElementById('symptoms').value;
        const suggestions = getSimulatedSuggestions(symptomsInput);

        // Display suggestions
        displaySuggestions(suggestions);
    });

    function getSimulatedSuggestions(symptoms) {
        // Simulated data, replace with actual data retrieval logic
        const suggestions = {
            "Cough and Cold": [
                "Tulsi (Holy Basil) leaves",
                "Honey and Ginger tea",
                "Sitopaladi Churna",
            ],
            "Digestive Problems": [
                "Triphala churna",
                "Jeera (Cumin) water",
                "Aloe Vera juice",
            ],
            "Skin Allergies": [
                "Neem leaves paste",
                "Turmeric and honey mask",
                "Coconut oil application",
            ],
        };

        return suggestions[symptoms] || [];
    }

    function displaySuggestions(suggestions) {
        suggestionsList.innerHTML = ''; // Clear previous suggestions

        if (suggestions.length === 0) {
            suggestionsList.innerHTML = '<p>No suggestions found.</p>';
        } else {
            suggestions.forEach((suggestion) => {
                const listItem = document.createElement('li');
                listItem.textContent = suggestion;
                suggestionsList.appendChild(listItem);
            });
        }
    }
});
