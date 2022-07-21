define(["react", "react-class", "draw/Group", "./component/All"], function Token(React, ReactClass, Group, C)
{
	var Token = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image, pendulum: this.props.pendulum.enabled, rarity: this.props.rarity }),
				React.createElement(C.Border, { value: "Token", pendulum: this.props.pendulum.enabled }),
				React.createElement(C.CardName, { value: this.props.name, rarity: this.props.rarity }),
				React.createElement(C.Attribute, { value: this.props.attribute }),
				React.createElement(C.Level, { value: this.props.level, star: "Normal" }),
				
				React.createElement(C.Pendulum, this.props.pendulum),
				
				React.createElement(C.Type, { value: this.props.type }),
				React.createElement(C.Effect, { value: this.props.effect }),
				React.createElement(C.Atk, { value: this.props.atk }),
				React.createElement(C.Def, { value: this.props.def }),
				
				React.createElement(C.Serial, { value: this.props.serial }),
				React.createElement(C.Id, { value: this.props.id, position: this.props.pendulum.enabled ? "pendulum" : "regular" }),
				React.createElement(C.Copyright, { value: this.props.copyright })
			);
			
			//return React.createElement(Shared, Object.assign({}, this.props, { border: this.props.pendulum.enabled ? "res/tcg/ygo/border/Token.pendulum.png" : "res/tcg/ygo/border/Token.png"}))
		}
	});
	Token.displayName = "Token";
	Token.defaultProps = {
	};
	return Token;
});
