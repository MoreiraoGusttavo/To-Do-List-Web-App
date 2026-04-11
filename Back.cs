using System;
using System.Collections.Generic;

namespace ToDoList
{
    public class Back : IMenu
    {
        public void Display()
        {
            Console.WriteLine("Voltando para o menu anterior...");
        }

        public void Execute()
        {
                Console.WriteLine("Ação de voltar para o menu anterior executada.");
        }
    }
}   
