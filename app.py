from flask import Flask, render_template, request, jsonify

from hero_champ import heroes

app = Flask(__name__)

team_heroes = None
team_heroes_champions = None

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/submitDraftSelect", methods=['POST'])
def draft_submit():
    global team_heroes
    draft_data = request.json
    
    blue_team = draft_data.get('blue_team', [])
    red_team = draft_data.get('red_team', []) 
    
    team_heroes = {
        'blue_team': {hero: heroes[hero] for hero in blue_team},
        'red_team': {hero: heroes[hero] for hero in red_team}
    }
    
    return jsonify(team_heroes)


@app.route("/champSelect")
def test():
    global team_heroes
    blue_team = team_heroes['blue_team']
    red_team = team_heroes['red_team']

    blue_team_players = list(blue_team.keys())
    red_team_players = list(red_team.keys()) 

    return render_template('champSelect.html', blue_team_players = blue_team_players, red_team_players = red_team_players, blue_team = blue_team, red_team = red_team)

@app.route("/submitChampionSelect", methods=['POST'])
def champ_submit():
    global team_heroes_champions
    champ_data = request.json
    
    blue_team_heroes_champions = champ_data.get('blue_team', [])
    red_team_heroes_champions = champ_data.get('red_team', [])
    
    team_heroes_champions = {
        'blue_team': {pair.split('-')[0]: pair.split('-')[1] for pair in blue_team_heroes_champions},
        'red_team': {pair.split('-')[0]: pair.split('-')[1] for pair in red_team_heroes_champions}
    }
    
    print(team_heroes_champions)
    
    return jsonify(team_heroes_champions)

@app.route("/postGame")
def champ_select():
    global team_heroes_champions
    
    return render_template('postGame.html', thc=team_heroes_champions)
if __name__ == '__main__':
    app.run(debug=True)
    