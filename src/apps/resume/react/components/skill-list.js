MyComponents.Skill = React.createClass({

  render: function() {
    var skill = this.props.skill;
    return (
      <li className="card hoverable green accent-1">
        <div className="card-content center-align black-text">
          <span className="card-title">{skill.language}</span>
        </div>
      </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="row">
        <h3 className="center-align">Skills</h3>
        <ul>

        {skillElements}

        </ul>
      </div>
    );
  }
});