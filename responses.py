def get_bot_response(message):
        message= message.lower()
        if "zdravo" in message or "cao" in message:
                return"Zdravo! Kako mogu da ti pomognem u vezi nastave."
        elif "raspored" in message:
                return"Raspored casova se nalazi na oglasnoj tabli skole i na sajtu."
        elif"ucionica" in message:
                return"Koju ucionicu trazis.Mogu da ti pomognem "
        elif "pravila" in message:
                return"Pravila su na oglasnoj tabli."
        elif "test" in message:
                return"Vreem odrzavanja testova ej istaknuto na sajtu"
        elif "nastavnici" in message:
                return"nastavnici su u skoli"
        else:
                return"Nisam siguran kako da odgovorim . Ponovi pitanje"