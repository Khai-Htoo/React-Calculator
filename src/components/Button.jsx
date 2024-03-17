const Button = ({ handleButton }) => {
  return (
    <div className=" grid grid-cols-4 mt-3">
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6  text-white hover:bg-blue-900"
      >
        C
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900 "
      >
        (
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        )
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        AC
      </button>

      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6  text-white hover:bg-blue-900"
      >
        1
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900 "
      >
        2
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        3
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        +
      </button>

      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6  text-white hover:bg-blue-900"
      >
        4
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900 "
      >
        5
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        6
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        -
      </button>

      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6  text-white hover:bg-blue-900"
      >
        7
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900 "
      >
        8
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        9
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        *
      </button>

      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6  text-white hover:bg-blue-900"
      >
        .
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900 "
      >
        0
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        00
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        /
      </button>

      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900"
      >
        %
      </button>
      <button
        onClick={(e) => handleButton(e.target.innerHTML)}
        className=" p-6 text-white hover:bg-blue-900 col-span-3 bg-orange-600"
      >
        =
      </button>
    </div>
  );
};

export default Button;
