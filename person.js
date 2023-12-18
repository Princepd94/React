function Person(props) {
  return (
    <p>
      {props.name} is {props.age} years old.
    </p>
  );
}

// Usage
<Person name="Prince" age="28" />
