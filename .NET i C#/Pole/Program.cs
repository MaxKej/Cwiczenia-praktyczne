using System;

namespace Pole
{
    abstract class Figura
    {
        public abstract double ObliczPole();
    }

    class Punkt : Figura
    {
        public Punkt(double x, double y)
        {
            X = x;
            Y = y;
        }
        public double X { get; set; }
        public double Y { get; set; }
        public override double ObliczPole() => 0.0;
    }

    class Odcinek : Figura
    {
        public Odcinek(double d)
        {
            Dlugosc = d;
        }

        public double Dlugosc { get; set; }
        public override double ObliczPole() => 0.0;
    }

    class Prostokąt : Figura
    {
        public Prostokąt(double a, double b)
        {
            A = a;
            B = b;
        }

        public double A { get; set; }
        public double B { get; set; }

        public override double ObliczPole() => A * B;

    }

    class Koło : Figura
    {
        public Koło(double r)
        {
            R = r;
        }

        public double R { get; set; }
        public override double ObliczPole() => Math.PI * Math.Pow(R, 2);

    }


    class Program
    {
        public static void Main(string[] args) 
        {
            Punkt punkt = new Punkt(2, 3);
            Odcinek odcinek = new Odcinek(6);
            Prostokąt prostokąt = new Prostokąt(5, 6);
            Koło koło = new Koło(10);

            Console.WriteLine("Pole punktu: " + punkt.ObliczPole());
            Console.WriteLine("Pole odcinka: " + odcinek.ObliczPole());
            Console.WriteLine("Pole prostokąta: " + prostokąt.ObliczPole());
            Console.WriteLine("Pole koła: " + koło.ObliczPole());


        }
    }

}